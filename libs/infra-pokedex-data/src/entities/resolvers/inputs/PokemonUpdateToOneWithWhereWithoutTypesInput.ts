import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateWithoutTypesInput } from "../inputs/PokemonUpdateWithoutTypesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpdateToOneWithWhereWithoutTypesInput", {})
export class PokemonUpdateToOneWithWhereWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutTypesInput, {
    nullable: false
  })
  data!: PokemonUpdateWithoutTypesInput;
}
