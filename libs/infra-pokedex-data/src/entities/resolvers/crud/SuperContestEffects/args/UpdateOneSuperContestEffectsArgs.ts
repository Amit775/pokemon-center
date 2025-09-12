import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsUpdateInput } from "../../../inputs/SuperContestEffectsUpdateInput";
import { SuperContestEffectsWhereUniqueInput } from "../../../inputs/SuperContestEffectsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSuperContestEffectsArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsUpdateInput, {
    nullable: false
  })
  data!: SuperContestEffectsUpdateInput;

  @TypeGraphQL.Field(_type => SuperContestEffectsWhereUniqueInput, {
    nullable: false
  })
  where!: SuperContestEffectsWhereUniqueInput;
}
