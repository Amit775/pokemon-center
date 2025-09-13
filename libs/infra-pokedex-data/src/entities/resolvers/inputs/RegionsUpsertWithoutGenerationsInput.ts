import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionsCreateWithoutGenerationsInput } from "../inputs/RegionsCreateWithoutGenerationsInput";
import { RegionsUpdateWithoutGenerationsInput } from "../inputs/RegionsUpdateWithoutGenerationsInput";
import { RegionsWhereInput } from "../inputs/RegionsWhereInput";

@TypeGraphQL.InputType("RegionsUpsertWithoutGenerationsInput", {})
export class RegionsUpsertWithoutGenerationsInput {
  @TypeGraphQL.Field(_type => RegionsUpdateWithoutGenerationsInput, {
    nullable: false
  })
  update!: RegionsUpdateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => RegionsCreateWithoutGenerationsInput, {
    nullable: false
  })
  create!: RegionsCreateWithoutGenerationsInput;

  @TypeGraphQL.Field(_type => RegionsWhereInput, {
    nullable: true
  })
  where?: RegionsWhereInput | undefined;
}
