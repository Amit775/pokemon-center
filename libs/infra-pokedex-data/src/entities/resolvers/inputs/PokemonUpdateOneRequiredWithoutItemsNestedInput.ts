import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutItemsInput } from "../inputs/PokemonCreateOrConnectWithoutItemsInput";
import { PokemonCreateWithoutItemsInput } from "../inputs/PokemonCreateWithoutItemsInput";
import { PokemonUpdateToOneWithWhereWithoutItemsInput } from "../inputs/PokemonUpdateToOneWithWhereWithoutItemsInput";
import { PokemonUpsertWithoutItemsInput } from "../inputs/PokemonUpsertWithoutItemsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutItemsNestedInput", {})
export class PokemonUpdateOneRequiredWithoutItemsNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutItemsInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutItemsInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateToOneWithWhereWithoutItemsInput, {
    nullable: true
  })
  update?: PokemonUpdateToOneWithWhereWithoutItemsInput | undefined;
}
