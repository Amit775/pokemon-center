import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutGameIndicesInput } from "../inputs/LocationCreateWithoutGameIndicesInput";
import { LocationUpdateWithoutGameIndicesInput } from "../inputs/LocationUpdateWithoutGameIndicesInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutGameIndicesInput", {})
export class LocationUpsertWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: LocationCreateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
