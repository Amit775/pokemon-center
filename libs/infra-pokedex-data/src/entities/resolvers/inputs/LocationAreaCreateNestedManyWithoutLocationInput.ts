import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationAreaCreateManyLocationInputEnvelope } from "../inputs/LocationAreaCreateManyLocationInputEnvelope";
import { LocationAreaCreateOrConnectWithoutLocationInput } from "../inputs/LocationAreaCreateOrConnectWithoutLocationInput";
import { LocationAreaCreateWithoutLocationInput } from "../inputs/LocationAreaCreateWithoutLocationInput";
import { LocationAreaWhereUniqueInput } from "../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.InputType("LocationAreaCreateNestedManyWithoutLocationInput", {})
export class LocationAreaCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [LocationAreaCreateWithoutLocationInput], {
    nullable: true
  })
  create?: LocationAreaCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: LocationAreaCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: LocationAreaCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaWhereUniqueInput], {
    nullable: true
  })
  connect?: LocationAreaWhereUniqueInput[] | undefined;
}
