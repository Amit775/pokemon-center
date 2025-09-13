import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyItemInput } from "../inputs/BerriesCreateManyItemInput";

@TypeGraphQL.InputType("BerriesCreateManyItemInputEnvelope", {})
export class BerriesCreateManyItemInputEnvelope {
  @TypeGraphQL.Field(_type => [BerriesCreateManyItemInput], {
    nullable: false
  })
  data!: BerriesCreateManyItemInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
