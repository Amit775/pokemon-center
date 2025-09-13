import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyLocationInput } from "../inputs/PokemonEvolutionCreateManyLocationInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyLocationInputEnvelope", {})
export class PokemonEvolutionCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyLocationInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
