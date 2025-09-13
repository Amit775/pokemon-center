import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateOrConnectWithoutLocationsInput } from "../inputs/RegionsCreateOrConnectWithoutLocationsInput";
import { RegionsCreateWithoutLocationsInput } from "../inputs/RegionsCreateWithoutLocationsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateNestedOneWithoutLocationsInput", {})
export class RegionsCreateNestedOneWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionsCreateWithoutLocationsInput, {
    nullable: true
  })
  create?: RegionsCreateWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsCreateOrConnectWithoutLocationsInput, {
    nullable: true
  })
  connectOrCreate?: RegionsCreateOrConnectWithoutLocationsInput | undefined;

  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionsWhereUniqueInput | undefined;
}
