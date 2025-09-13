import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutMovesInput } from "../inputs/PokemonCreateOrConnectWithoutMovesInput";
import { PokemonCreateWithoutMovesInput } from "../inputs/PokemonCreateWithoutMovesInput";
import { PokemonUpdateToOneWithWhereWithoutMovesInput } from "../inputs/PokemonUpdateToOneWithWhereWithoutMovesInput";
import { PokemonUpsertWithoutMovesInput } from "../inputs/PokemonUpsertWithoutMovesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutMovesNestedInput", {})
export class PokemonUpdateOneRequiredWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutMovesInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: PokemonUpdateToOneWithWhereWithoutMovesInput | undefined;
}
