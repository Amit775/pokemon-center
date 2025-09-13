import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersCreateWithoutEvolutionInput } from "../inputs/EvolutionTriggersCreateWithoutEvolutionInput";
import { EvolutionTriggersWhereUniqueInput } from "../inputs/EvolutionTriggersWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionTriggersCreateOrConnectWithoutEvolutionInput", {})
export class EvolutionTriggersCreateOrConnectWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggersWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionTriggersWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionTriggersCreateWithoutEvolutionInput, {
    nullable: false
  })
  create!: EvolutionTriggersCreateWithoutEvolutionInput;
}
