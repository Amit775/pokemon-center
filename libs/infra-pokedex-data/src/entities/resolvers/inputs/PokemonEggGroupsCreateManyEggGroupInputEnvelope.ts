import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonEggGroupsCreateManyEggGroupInput } from "../inputs/PokemonEggGroupsCreateManyEggGroupInput";

@TypeGraphQL.InputType("PokemonEggGroupsCreateManyEggGroupInputEnvelope", {})
export class PokemonEggGroupsCreateManyEggGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateManyEggGroupInput], {
    nullable: false
  })
  data!: PokemonEggGroupsCreateManyEggGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
