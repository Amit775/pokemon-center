import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggerCreateOrConnectWithoutEvolutionInput } from "../inputs/EvolutionTriggerCreateOrConnectWithoutEvolutionInput";
import { EvolutionTriggerCreateWithoutEvolutionInput } from "../inputs/EvolutionTriggerCreateWithoutEvolutionInput";
import { EvolutionTriggerWhereUniqueInput } from "../inputs/EvolutionTriggerWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionTriggerCreateNestedOneWithoutEvolutionInput", {})
export class EvolutionTriggerCreateNestedOneWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggerCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: EvolutionTriggerCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: EvolutionTriggerCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggerWhereUniqueInput, {
    nullable: true
  })
  connect?: EvolutionTriggerWhereUniqueInput | undefined;
}
