import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsUpdateWithoutGenerationsInput } from "../inputs/RegionsUpdateWithoutGenerationsInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpdateToOneWithWhereWithoutGenerationsInput", {})
export class RegionsUpdateToOneWithWhereWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionsUpdateWithoutGenerationsInput, {
    nullable: false
  })
  data!: RegionsUpdateWithoutGenerationsInput;
}
