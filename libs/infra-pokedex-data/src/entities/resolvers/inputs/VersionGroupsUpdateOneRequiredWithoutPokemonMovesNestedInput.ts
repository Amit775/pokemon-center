import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionGroupsCreateOrConnectWithoutPokemonMovesInput } from "../inputs/VersionGroupsCreateOrConnectWithoutPokemonMovesInput";
import { VersionGroupsCreateWithoutPokemonMovesInput } from "../inputs/VersionGroupsCreateWithoutPokemonMovesInput";
import { VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput } from "../inputs/VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput";
import { VersionGroupsUpsertWithoutPokemonMovesInput } from "../inputs/VersionGroupsUpsertWithoutPokemonMovesInput";
import { VersionGroupsWhereUniqueInput } from "../inputs/VersionGroupsWhereUniqueInput";

@TypeGraphQL.InputType("VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput", {})
export class VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput {
  @TypeGraphQL.Field(_type => VersionGroupsCreateWithoutPokemonMovesInput, {
    nullable: true
  })
  create?: VersionGroupsCreateWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsCreateOrConnectWithoutPokemonMovesInput, {
    nullable: true
  })
  connectOrCreate?: VersionGroupsCreateOrConnectWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpsertWithoutPokemonMovesInput, {
    nullable: true
  })
  upsert?: VersionGroupsUpsertWithoutPokemonMovesInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionGroupsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput, {
    nullable: true
  })
  update?: VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput | undefined;
}
