import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuperContestEffectsWhereInput } from "../../../inputs/SuperContestEffectsWhereInput";

@TypeGraphQL.ArgsType()
export class MovesSuperContestEffectArgs {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectsWhereInput | undefined;
}
