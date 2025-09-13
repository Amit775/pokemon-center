import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationsCreateOrConnectWithoutGameIndicesInput } from "../inputs/LocationsCreateOrConnectWithoutGameIndicesInput";
import { LocationsCreateWithoutGameIndicesInput } from "../inputs/LocationsCreateWithoutGameIndicesInput";
import { LocationsWhereUniqueInput } from "../inputs/LocationsWhereUniqueInput";

@TypeGraphQL.InputType("LocationsCreateNestedOneWithoutGameIndicesInput", {})
export class LocationsCreateNestedOneWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => LocationsCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: LocationsCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => LocationsCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: LocationsCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => LocationsWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationsWhereUniqueInput | undefined;
}
