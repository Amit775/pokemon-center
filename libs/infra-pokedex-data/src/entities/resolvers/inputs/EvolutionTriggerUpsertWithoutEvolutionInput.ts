import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerCreateWithoutEvolutionInput } from "../inputs/EvolutionTriggerCreateWithoutEvolutionInput";
import { EvolutionTriggerUpdateWithoutEvolutionInput } from "../inputs/EvolutionTriggerUpdateWithoutEvolutionInput";
import { EvolutionTriggerWhereInput } from "../inputs/EvolutionTriggerWhereInput";

@TypeGraphQL.InputType("EvolutionTriggerUpsertWithoutEvolutionInput", {})
export class EvolutionTriggerUpsertWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggerUpdateWithoutEvolutionInput, {
    nullable: false
  })
  update!: EvolutionTriggerUpdateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => EvolutionTriggerCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: EvolutionTriggerCreateWithoutEvolutionInput;

  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggerWhereInput | undefined;
}
