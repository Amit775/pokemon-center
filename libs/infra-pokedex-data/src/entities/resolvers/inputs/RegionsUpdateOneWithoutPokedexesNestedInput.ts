import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutPokedexesInput } from "../inputs/RegionsCreateOrConnectWithoutPokedexesInput";
import { RegionsCreateWithoutPokedexesInput } from "../inputs/RegionsCreateWithoutPokedexesInput";
import { RegionsUpdateToOneWithWhereWithoutPokedexesInput } from "../inputs/RegionsUpdateToOneWithWhereWithoutPokedexesInput";
import { RegionsUpsertWithoutPokedexesInput } from "../inputs/RegionsUpsertWithoutPokedexesInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsUpdateOneWithoutPokedexesNestedInput", {})
export class RegionsUpdateOneWithoutPokedexesNestedInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutPokedexesInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutPokedexesInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpsertWithoutPokedexesInput, {
    nullable: true
  })
  upsert?: RegionsUpsertWithoutPokedexesInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  disconnect?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  delete?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateToOneWithWhereWithoutPokedexesInput, {
    nullable: true
  })
  update?: RegionsUpdateToOneWithWhereWithoutPokedexesInput | undefined;
}
