import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonSpeciesCreateManyHabitatInput } from "../inputs/PokemonSpeciesCreateManyHabitatInput";

@TypeGraphQL.InputType("PokemonSpeciesCreateManyHabitatInputEnvelope", {})
export class PokemonSpeciesCreateManyHabitatInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonSpeciesCreateManyHabitatInput], {
    nullable: false
  })
  data!: PokemonSpeciesCreateManyHabitatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
