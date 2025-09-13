import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutLocationsInput } from "../inputs/RegionsCreateWithoutLocationsInput";
import { RegionsWhereUniqueInput } from "../inputs/RegionsWhereUniqueInput";

@TypeGraphQL.InputType("RegionsCreateOrConnectWithoutLocationsInput", {})
export class RegionsCreateOrConnectWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutLocationsInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutLocationsInput;
}
