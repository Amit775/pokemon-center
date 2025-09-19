import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormTypeCreateManyTypeInput } from "../inputs/PokemonFormTypeCreateManyTypeInput";

@TypeGraphQL.InputType("PokemonFormTypeCreateManyTypeInputEnvelope", {})
export class PokemonFormTypeCreateManyTypeInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonFormTypeCreateManyTypeInput], {
    nullable: false
  })
  data!: PokemonFormTypeCreateManyTypeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
