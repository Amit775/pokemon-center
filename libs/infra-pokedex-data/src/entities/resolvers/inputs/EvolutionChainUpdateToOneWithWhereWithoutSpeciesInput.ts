import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EvolutionChainUpdateWithoutSpeciesInput } from "../inputs/EvolutionChainUpdateWithoutSpeciesInput";
import { EvolutionChainWhereInput } from "../inputs/EvolutionChainWhereInput";

@TypeGraphQL.InputType("EvolutionChainUpdateToOneWithWhereWithoutSpeciesInput", {})
export class EvolutionChainUpdateToOneWithWhereWithoutSpeciesInput {
  @TypeGraphQL.Field(_type => EvolutionChainWhereInput, {
    nullable: true
  })
  where?: EvolutionChainWhereInput | undefined;

  @TypeGraphQL.Field(_type => EvolutionChainUpdateWithoutSpeciesInput, {
    nullable: false
  })
  data!: EvolutionChainUpdateWithoutSpeciesInput;
}
