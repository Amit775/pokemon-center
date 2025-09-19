import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ItemCreateOrConnectWithoutPokemonItemsInput } from "../inputs/ItemCreateOrConnectWithoutPokemonItemsInput";
import { ItemCreateWithoutPokemonItemsInput } from "../inputs/ItemCreateWithoutPokemonItemsInput";
import { ItemUpdateToOneWithWhereWithoutPokemonItemsInput } from "../inputs/ItemUpdateToOneWithWhereWithoutPokemonItemsInput";
import { ItemUpsertWithoutPokemonItemsInput } from "../inputs/ItemUpsertWithoutPokemonItemsInput";
import { ItemWhereUniqueInput } from "../inputs/ItemWhereUniqueInput";

@TypeGraphQL.InputType("ItemUpdateOneRequiredWithoutPokemonItemsNestedInput", {})
export class ItemUpdateOneRequiredWithoutPokemonItemsNestedInput {
  @TypeGraphQL.Field(_type => ItemCreateWithoutPokemonItemsInput, {
    nullable: true
  })
  create?: ItemCreateWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemCreateOrConnectWithoutPokemonItemsInput, {
    nullable: true
  })
  connectOrCreate?: ItemCreateOrConnectWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpsertWithoutPokemonItemsInput, {
    nullable: true
  })
  upsert?: ItemUpsertWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => ItemWhereUniqueInput, {
    nullable: true
  })
  connect?: ItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ItemUpdateToOneWithWhereWithoutPokemonItemsInput, {
    nullable: true
  })
  update?: ItemUpdateToOneWithWhereWithoutPokemonItemsInput | undefined;
}
