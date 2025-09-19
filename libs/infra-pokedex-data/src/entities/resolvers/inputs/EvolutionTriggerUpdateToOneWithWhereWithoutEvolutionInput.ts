import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerUpdateWithoutEvolutionInput } from "../inputs/EvolutionTriggerUpdateWithoutEvolutionInput";
import { EvolutionTriggerWhereInput } from "../inputs/EvolutionTriggerWhereInput";

@TypeGraphQL.InputType("EvolutionTriggerUpdateToOneWithWhereWithoutEvolutionInput", {})
export class EvolutionTriggerUpdateToOneWithWhereWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggerWhereInput, {
    nullable: true
  })
  where?: EvolutionTriggerWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerUpdateWithoutEvolutionInput, {
    nullable: false
  })
  data!: EvolutionTriggerUpdateWithoutEvolutionInput;
}
