import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutAreasInput } from "../inputs/LocationCreateOrConnectWithoutAreasInput";
import { LocationCreateWithoutAreasInput } from "../inputs/LocationCreateWithoutAreasInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutAreasInput", {})
export class LocationCreateNestedOneWithoutAreasInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutAreasInput, {
    nullable: true
  })
  create?: LocationCreateWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutAreasInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutAreasInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
