import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainCreateWithoutSpeciesInput } from "../inputs/EvolutionChainCreateWithoutSpeciesInput";
import { EvolutionChainUpdateWithoutSpeciesInput } from "../inputs/EvolutionChainUpdateWithoutSpeciesInput";
import { EvolutionChainWhereInput } from "../inputs/EvolutionChainWhereInput";

@TypeGraphQL.InputType("EvolutionChainUpsertWithoutSpeciesInput", {})
export class EvolutionChainUpsertWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainUpdateWithoutSpeciesInput, {
    nullable: false
  })
  update!: EvolutionChainUpdateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EvolutionChainCreateWithoutSpeciesInput, {
    nullable: false
  })
  create!: EvolutionChainCreateWithoutSpeciesInput;

  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  where?: EvolutionChainWhereInput | undefined;
}
