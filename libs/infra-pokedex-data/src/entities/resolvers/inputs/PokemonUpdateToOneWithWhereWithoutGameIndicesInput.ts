import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateWithoutGameIndicesInput } from "../inputs/PokemonUpdateWithoutGameIndicesInput";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonUpdateToOneWithWhereWithoutGameIndicesInput", {})
export class PokemonUpdateToOneWithWhereWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  data!: PokemonUpdateWithoutGameIndicesInput;
}
