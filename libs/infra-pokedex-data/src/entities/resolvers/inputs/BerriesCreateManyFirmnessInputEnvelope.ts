import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerriesCreateManyFirmnessInput } from "../inputs/BerriesCreateManyFirmnessInput";

@TypeGraphQL.InputType("BerriesCreateManyFirmnessInputEnvelope", {})
export class BerriesCreateManyFirmnessInputEnvelope {
  @TypeGraphQL.Field(_type => [BerriesCreateManyFirmnessInput], {
    nullable: false
  })
  data!: BerriesCreateManyFirmnessInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
