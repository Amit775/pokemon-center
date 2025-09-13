import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutGameIndicesInput } from "../inputs/PokemonCreateOrConnectWithoutGameIndicesInput";
import { PokemonCreateWithoutGameIndicesInput } from "../inputs/PokemonCreateWithoutGameIndicesInput";
import { PokemonUpdateToOneWithWhereWithoutGameIndicesInput } from "../inputs/PokemonUpdateToOneWithWhereWithoutGameIndicesInput";
import { PokemonUpsertWithoutGameIndicesInput } from "../inputs/PokemonUpsertWithoutGameIndicesInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutGameIndicesNestedInput", {})
export class PokemonUpdateOneRequiredWithoutGameIndicesNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutGameIndicesInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateToOneWithWhereWithoutGameIndicesInput, {
    nullable: true
  })
  update?: PokemonUpdateToOneWithWhereWithoutGameIndicesInput | undefined;
}
