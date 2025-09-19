import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectUpdateManyMutationInput } from "../../../inputs/SuperContestEffectUpdateManyMutationInput";
import { SuperContestEffectWhereInput } from "../../../inputs/SuperContestEffectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectUpdateManyMutationInput, {
    nullable: false
  })
  data!: SuperContestEffectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectWhereInput | undefined;
}
