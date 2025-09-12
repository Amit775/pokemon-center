import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestCombosUpdateManyMutationInput } from "../../../inputs/SuperContestCombosUpdateManyMutationInput";
import { SuperContestCombosWhereInput } from "../../../inputs/SuperContestCombosWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySuperContestCombosArgs {
  @TypeGraphQL.Field(_type => SuperContestCombosUpdateManyMutationInput, {
    nullable: false
  })
  data!: SuperContestCombosUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SuperContestCombosWhereInput, {
    nullable: true
  })
  where?: SuperContestCombosWhereInput | undefined;
}
