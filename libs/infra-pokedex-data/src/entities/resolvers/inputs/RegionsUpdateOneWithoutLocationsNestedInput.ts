import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutLocationsInput } from "../inputs/RegionsCreateOrConnectWithoutLocationsInput";
import { RegionsCreateWithoutLocationsInput } from "../inputs/RegionsCreateWithoutLocationsInput";
import { RegionsUpdateToOneWithWhereWithoutLocationsInput } from "../inputs/RegionsUpdateToOneWithWhereWithoutLocationsInput";
import { RegionsUpsertWithoutLocationsInput } from "../inputs/RegionsUpsertWithoutLocationsInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsUpdateOneWithoutLocationsNestedInput", {})
export class RegionsUpdateOneWithoutLocationsNestedInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutLocationsInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutLocationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpsertWithoutLocationsInput, {
    nullable: true
  })
  upsert?: RegionsUpsertWithoutLocationsInput | undefined;

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

  @TypeGraphQL.Field(_type => RegionsUpdateToOneWithWhereWithoutLocationsInput, {
    nullable: true
  })
  update?: RegionsUpdateToOneWithWhereWithoutLocationsInput | undefined;
}
