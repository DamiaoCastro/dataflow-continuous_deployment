const { google } = require('googleapis');

async function launch() {

    const auth = new google.auth.GoogleAuth({
        keyFile: './credentials.json',
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });

    const dataflow = google.dataflow({ version: 'v1b3', auth: auth });

    // const response = await dataflow.projects.locations.templates.launch({
    //     projectId: "damiao-project-1",
    //     gcsPath: "gs://dataflow-templates-europe-west6/latest/PubSub_Subscription_to_BigQuery",
    //     validateOnly: false,
    //     location: "europe-west1",
    //     requestBody: {
    //         jobName: "test_6",
    //         environment: {
    //             bypassTempDirValidation: false,
    //             maxWorkers: 1,
    //             machineType: "n1-standard-1",
    //             tempLocation: "gs://damiao-project-1/temp",
    //             ipConfiguration: "WORKER_IP_UNSPECIFIED",
    //             enableStreamingEngine: true,
    //             additionalExperiments: []
    //         },
    //         parameters: {
    //             inputSubscription: "projects/damiao-project-1/subscriptions/test-subscription",
    //             javascriptTextTransformGcsPath: "gs://damiao-project-1/udf.js",
    //             javascriptTextTransformFunctionName: "transform",
    //             outputTableSpec: "damiao-project-1:Business.dataflow_test",
    //             outputDeadletterTable: "damiao-project-1:Business.dataflow_test_error_records"
    //         }
    //     }
    // }, {});


    const response = await dataflow.projects.locations.jobs.update({
        location: "europe-west1",
        projectId: "damiao-project-1",
        jobId: "2021-02-12_07_09_14-3724392685566488458",
        requestBody: {
            "id": "2021-02-12_07_09_14-3724392685566488458",
            name: "test_6",
            location: "europe-west1",
            "projectId": "damiao-project-1",
            requestedState: "JOB_STATE_CANCELLED"
        }
    }, {});

    console.log(JSON.stringify(response));

    // const response = await
    //     dataflow.projects.jobs.aggregated({
    //         projectId: "damiao-project-1",
    //         filter: "ACTIVE",
    //         // location: "europe-west1",
    //     });

    // const job1 = response.data.jobs[0];


    // console.log(JSON.stringify(job1n));
}

launch();