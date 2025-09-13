import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuperContestEffectsUpdateWithoutMovesInput } from "../inputs/SuperContestEffectsUpdateWithoutMovesInput";
import { SuperContestEffectsWhereInput } from "../inputs/SuperContestEffectsWhereInput";

@TypeGraphQL.InputType("SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput", {})
export class SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => SuperContestEffectsWhereInput, {
    nullable: true
  })
  where?: SuperContestEffectsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SuperContestEffectsUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: SuperContestEffectsUpdateWithoutMovesInput;
}
