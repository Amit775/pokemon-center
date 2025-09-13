import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyGrowthRateInput } from "../inputs/PokemonSpeciesCreateManyGrowthRateInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateManyGrowthRateInputEnvelope", {})
export class PokemonSpeciesCreateManyGrowthRateInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateManyGrowthRateInput], {
    nullable: false
  })
  data!: PokemonSpeciesCreateManyGrowthRateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
