import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutLocationsInput } from "../inputs/RegionsCreateWithoutLocationsInput";
import { RegionsUpdateWithoutLocationsInput } from "../inputs/RegionsUpdateWithoutLocationsInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpsertWithoutLocationsInput", {})
export class RegionsUpsertWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionsUpdateWithoutLocationsInput, {
    nullable: false
  })
  update!: RegionsUpdateWithoutLocationsInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutLocationsInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutLocationsInput;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;
}
