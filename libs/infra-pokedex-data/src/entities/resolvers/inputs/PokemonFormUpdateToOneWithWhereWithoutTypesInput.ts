import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonFormUpdateWithoutTypesInput } from "../inputs/PokemonFormUpdateWithoutTypesInput";
import { PokemonFormWhereInput } from "../inputs/PokemonFormWhereInput";

@TypeGraphQL.InputType("PokemonFormUpdateToOneWithWhereWithoutTypesInput", {})
export class PokemonFormUpdateToOneWithWhereWithoutTypesInput {
  @TypeGraphQL.Field(_type => PokemonFormWhereInput, {
    nullable: true
  })
  where?: PokemonFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonFormUpdateWithoutTypesInput, {
    nullable: false
  })
  data!: PokemonFormUpdateWithoutTypesInput;
}
