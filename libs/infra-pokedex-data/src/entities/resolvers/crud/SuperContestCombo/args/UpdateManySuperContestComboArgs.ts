import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestComboUpdateManyMutationInput } from "../../../inputs/SuperContestComboUpdateManyMutationInput";
import { SuperContestComboWhereInput } from "../../../inputs/SuperContestComboWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySuperContestComboArgs {
  @TypeGraphQL.Field(_type => SuperContestComboUpdateManyMutationInput, {
    nullable: false
  })
  data!: SuperContestComboUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SuperContestComboWhereInput, {
    nullable: true
  })
  where?: SuperContestComboWhereInput | undefined;
}
