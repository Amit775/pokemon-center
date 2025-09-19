import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectUpdateInput } from "../../../inputs/SuperContestEffectUpdateInput";
import { SuperContestEffectWhereUniqueInput } from "../../../inputs/SuperContestEffectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectUpdateInput, {
    nullable: false
  })
  data!: SuperContestEffectUpdateInput;

  @TypeGraphQL.Field(_type => SuperContestEffectWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectWhereUniqueInput;
}
