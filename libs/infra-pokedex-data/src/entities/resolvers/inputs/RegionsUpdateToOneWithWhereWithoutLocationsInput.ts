import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsUpdateWithoutLocationsInput } from "../inputs/RegionsUpdateWithoutLocationsInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpdateToOneWithWhereWithoutLocationsInput", {})
export class RegionsUpdateToOneWithWhereWithoutLocationsInput {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateWithoutLocationsInput, {
    nullable: false
  })
  data!: RegionsUpdateWithoutLocationsInput;
}
