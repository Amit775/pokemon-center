import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutGameIndicesInput } from "../inputs/LocationCreateOrConnectWithoutGameIndicesInput";
import { LocationCreateWithoutGameIndicesInput } from "../inputs/LocationCreateWithoutGameIndicesInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutGameIndicesInput", {})
export class LocationCreateNestedOneWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: LocationCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
