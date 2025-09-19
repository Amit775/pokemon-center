import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionCreateManyInput } from "../../../inputs/VersionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVersionArgs {
  @TypeGraphQL.Field(_type => [VersionCreateManyInput], {
    nullable: false
  })
  data!: VersionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
