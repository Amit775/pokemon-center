import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupCreateManyEggGroupInput } from "../inputs/PokemonEggGroupCreateManyEggGroupInput";

@TypeGraphQL.InputType("PokemonEggGroupCreateManyEggGroupInputEnvelope", {})
export class PokemonEggGroupCreateManyEggGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEggGroupCreateManyEggGroupInput], {
    nullable: false
  })
  data!: PokemonEggGroupCreateManyEggGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
