import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateNestedManyWithoutRegionInput } from "../inputs/GenerationCreateNestedManyWithoutRegionInput";
import { LocationCreateNestedManyWithoutRegionInput } from "../inputs/LocationCreateNestedManyWithoutRegionInput";
import { PokedexCreateNestedManyWithoutRegionInput } from "../inputs/PokedexCreateNestedManyWithoutRegionInput";

@TypeGraphQL.InputType("RegionCreateWithoutVersionGroupsInput", {})
export class RegionCreateWithoutVersionGroupsInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => GenerationCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  generations?: GenerationCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  locations?: LocationCreateNestedManyWithoutRegionInput | undefined;

  @TypeGraphQL.Field(_type => PokedexCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  pokedexes?: PokedexCreateNestedManyWithoutRegionInput | undefined;
}
