import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEvolutionCreateManyTriggerItemInput } from "../inputs/PokemonEvolutionCreateManyTriggerItemInput";

@TypeGraphQL.InputType("PokemonEvolutionCreateManyTriggerItemInputEnvelope", {})
export class PokemonEvolutionCreateManyTriggerItemInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEvolutionCreateManyTriggerItemInput], {
    nullable: false
  })
  data!: PokemonEvolutionCreateManyTriggerItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
