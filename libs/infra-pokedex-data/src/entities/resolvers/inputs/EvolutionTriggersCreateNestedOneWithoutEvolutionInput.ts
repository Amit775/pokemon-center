import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionTriggersCreateOrConnectWithoutEvolutionInput } from "../inputs/EvolutionTriggersCreateOrConnectWithoutEvolutionInput";
import { EvolutionTriggersCreateWithoutEvolutionInput } from "../inputs/EvolutionTriggersCreateWithoutEvolutionInput";
import { EvolutionTriggersWhereUniqueInput } from "../inputs/EvolutionTriggersWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionTriggersCreateNestedOneWithoutEvolutionInput", {})
export class EvolutionTriggersCreateNestedOneWithoutEvolutionInput {
  @TypeGraphQL.Field(_type => EvolutionTriggersCreateWithoutEvolutionInput, {
    nullable: true
  })
  create?: EvolutionTriggersCreateWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersCreateOrConnectWithoutEvolutionInput, {
    nullable: true
  })
  connectOrCreate?: EvolutionTriggersCreateOrConnectWithoutEvolutionInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionTriggersWhereUniqueInput, {
    nullable: true
  })
  connect?: EvolutionTriggersWhereUniqueInput | undefined;
}
