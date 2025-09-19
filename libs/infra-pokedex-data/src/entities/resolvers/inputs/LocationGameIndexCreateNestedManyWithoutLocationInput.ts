import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationGameIndexCreateManyLocationInputEnvelope } from "../inputs/LocationGameIndexCreateManyLocationInputEnvelope";
import { LocationGameIndexCreateOrConnectWithoutLocationInput } from "../inputs/LocationGameIndexCreateOrConnectWithoutLocationInput";
import { LocationGameIndexCreateWithoutLocationInput } from "../inputs/LocationGameIndexCreateWithoutLocationInput";
import { LocationGameIndexWhereUniqueInput } from "../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.InputType("LocationGameIndexCreateNestedManyWithoutLocationInput", {})
export class LocationGameIndexCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [LocationGameIndexCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationGameIndexCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationGameIndexCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationGameIndexCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationGameIndexWhereUniqueInput[] | undefined;
}
