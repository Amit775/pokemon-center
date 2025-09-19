import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateWithoutSpeciesInput } from "../inputs/EvolutionChainCreateWithoutSpeciesInput";
import { EvolutionChainWhereUniqueInput } from "../inputs/EvolutionChainWhereUniqueInput";

@TypeGraphQL.InputType("EvolutionChainCreateOrConnectWithoutSpeciesInput", {})
export class EvolutionChainCreateOrConnectWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainWhereUniqueInput, {
    nullable: false
  })
  where!: EvolutionChainWhereUniqueInput;

  @TypeGraphQL.Field(_type => EvolutionChainCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EvolutionChainCreateWithoutSpeciesInput;
}
