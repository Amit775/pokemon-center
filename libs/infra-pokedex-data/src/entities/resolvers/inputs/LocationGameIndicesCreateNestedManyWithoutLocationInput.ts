import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndicesCreateManyLocationInputEnvelope } from "../inputs/LocationGameIndicesCreateManyLocationInputEnvelope";
import { LocationGameIndicesCreateOrConnectWithoutLocationInput } from "../inputs/LocationGameIndicesCreateOrConnectWithoutLocationInput";
import { LocationGameIndicesCreateWithoutLocationInput } from "../inputs/LocationGameIndicesCreateWithoutLocationInput";
import { LocationGameIndicesWhereUniqueInput } from "../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndicesCreateNestedManyWithoutLocationInput", {})
export class LocationGameIndicesCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationGameIndicesCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndicesCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndicesCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationGameIndicesWhereUniqueInput[] | undefined;
}
