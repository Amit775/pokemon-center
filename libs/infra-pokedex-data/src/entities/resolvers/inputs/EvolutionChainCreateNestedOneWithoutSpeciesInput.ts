import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateOrConnectWithoutSpeciesInput } from "../inputs/EvolutionChainCreateOrConnectWithoutSpeciesInput";
import { EvolutionChainCreateWithoutSpeciesInput } from "../inputs/EvolutionChainCreateWithoutSpeciesInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainCreateNestedOneWithoutSpeciesInput", {})
export class EvolutionChainCreateNestedOneWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainCreateWithoutSpeciesInput, {
    nullable: true
  })
  create?: EvolutionChainCreateWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainCreateOrConnectWithoutSpeciesInput, {
    nullable: true
  })
  connectOrCreate?: EvolutionChainCreateOrConnectWithoutSpeciesInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: true
  })
  connect?: EvolutionChainWhereUniqueInput | undefined;
}
