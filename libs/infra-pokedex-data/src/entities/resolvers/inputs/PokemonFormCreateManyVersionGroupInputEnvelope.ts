import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormCreateManyVersionGroupInput } from "../inputs/PokemonFormCreateManyVersionGroupInput";

@TypeGraphQL.InputType("PokemonFormCreateManyVersionGroupInputEnvelope", {})
export class PokemonFormCreateManyVersionGroupInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormCreateManyVersionGroupInput], {
    nullable: false
  })
  data!: PokemonFormCreateManyVersionGroupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
