import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionCreateOrConnectWithoutPokemonItemsInput } from "../inputs/VersionCreateOrConnectWithoutPokemonItemsInput";
import { VersionCreateWithoutPokemonItemsInput } from "../inputs/VersionCreateWithoutPokemonItemsInput";
import { VersionUpdateToOneWithWhereWithoutPokemonItemsInput } from "../inputs/VersionUpdateToOneWithWhereWithoutPokemonItemsInput";
import { VersionUpsertWithoutPokemonItemsInput } from "../inputs/VersionUpsertWithoutPokemonItemsInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionUpdateOneRequiredWithoutPokemonItemsNestedInput", {})
export class VersionUpdateOneRequiredWithoutPokemonItemsNestedInput {
  @TypeGraphQL.Field(_type => VersionCreateWithoutPokemonItemsInput, {
    nullable: true
  })
  create?: VersionCreateWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => VersionCreateOrConnectWithoutPokemonItemsInput, {
    nullable: true
  })
  connectOrCreate?: VersionCreateOrConnectWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpsertWithoutPokemonItemsInput, {
    nullable: true
  })
  upsert?: VersionUpsertWithoutPokemonItemsInput | undefined;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: true
  })
  connect?: VersionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VersionUpdateToOneWithWhereWithoutPokemonItemsInput, {
    nullable: true
  })
  update?: VersionUpdateToOneWithWhereWithoutPokemonItemsInput | undefined;
}
